from .models import Notice , Sponsors


from rest_framework import serializers

class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = "__all__"


class SponsorsSerializer(serializers.ModelSerializer):
    # ensure the CloudinaryField returns a full URL in responses
    logo = serializers.ImageField(read_only=True)
    class Meta:
        model = Sponsors
        fields = "__all__"
