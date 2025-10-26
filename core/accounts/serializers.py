from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    profile_image = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ['phone','password','name','batch','profession','bloodGroup','subject','t_shirt_size','religion','gender','profile_image']

    def create(self, validated_data):
        profile_image = validated_data.pop('profile_image', None)
        user = User.objects.create_user(**validated_data)
        if profile_image:
            user.profile_image = profile_image
            user.save()
        return user


class LoginSerializer(serializers.Serializer):
    phone = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        phone = data.get('phone')
        password = data.get('password')
        
        if not phone or not password:
            raise serializers.ValidationError("Phone and password are required")
        
        # Use phone as username since USERNAME_FIELD is 'phone'
        user = authenticate(username=phone, password=password)
        if not user:
            raise serializers.ValidationError("Invalid phone or password")
        if not user.is_active:
            raise serializers.ValidationError("User account is disabled")
        
        data['user'] = user
        return data


class UserSerializer(serializers.ModelSerializer):
    profile_image = serializers.ImageField(read_only=True)

    class Meta:
        model = User
        exclude = ['password']
