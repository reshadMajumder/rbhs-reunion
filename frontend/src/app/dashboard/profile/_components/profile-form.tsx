'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Ruler } from 'lucide-react';


const profileFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  bloodGroup: z.string().optional(),
  profession: z.string().min(2, { message: 'Profession is required.' }),
  batch: z.coerce.number().int().min(1980, 'Invalid batch year.').max(new Date().getFullYear(), 'Invalid batch year.'),
  subject: z.enum(['Science', 'Commerce', 'Humanities'], { required_error: 'Please select a subject.' }),
  religion: z.string().min(2, { message: 'Religion is required.' }),
  gender: z.enum(['Male', 'Female'], { required_error: 'Please select a gender.' }),
  tshirtSize: z.enum(['S', 'M', 'L', 'XL', 'XXL'], { required_error: 'Please select your T-shirt size.' }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// Dummy user data
const defaultValues: Partial<ProfileFormValues> = {
  name: 'Anisul Islam',
  email: 'user@example.com',
  phone: '1234567890',
  batch: 2002,
  profession: 'Software Engineer',
  bloodGroup: 'O+',
  subject: 'Science',
  gender: 'Male',
  religion: 'Muslim',
  tshirtSize: 'L'
};

const tshirtSizes = [
    { size: 'S', chest: '38"', length: '27"' },
    { size: 'M', chest: '40"', length: '28"' },
    { size: 'L', chest: '42"', length: '29"' },
    { size: 'XL', chest: '44"', length: '30"' },
    { size: 'XXL', chest: '46"', length: '31"' },
];

export default function ProfileForm() {
  const { toast } = useToast();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    toast({
      title: 'Profile Updated!',
      description: 'Your changes have been saved successfully.',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                    <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                    <Input placeholder="+880123456789" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                 <FormDescription>
                    Your email address is kept private.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="batch"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Batch Year</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="e.g., 2005" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="bloodGroup"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Blood Group</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., O+" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        
        <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Profession</FormLabel>
                <FormControl>
                <Input placeholder="e.g., Software Engineer" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
                <FormItem className="space-y-3">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                    <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                    >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl><RadioGroupItem value="Science" /></FormControl>
                        <FormLabel className="font-normal">Science</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl><RadioGroupItem value="Commerce" /></FormControl>
                        <FormLabel className="font-normal">Commerce</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl><RadioGroupItem value="Humanities" /></FormControl>
                        <FormLabel className="font-normal">Humanities</FormLabel>
                    </FormItem>
                    </RadioGroup>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
                <FormItem className="space-y-3">
                <FormLabel>Gender</FormLabel>
                <FormControl>
                    <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                    >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl><RadioGroupItem value="Male" /></FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl><RadioGroupItem value="Female" /></FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                    </FormItem>
                    </RadioGroup>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
                control={form.control}
                name="religion"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Religion</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                        <SelectValue placeholder="Select your religion" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem value="Muslim">Muslim</SelectItem>
                        <SelectItem value="Hindu">Hindu</SelectItem>
                        <SelectItem value="Christian">Christian</SelectItem>
                        <SelectItem value="Buddhist">Buddhist</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="tshirtSize"
                render={({ field }) => (
                <FormItem>
                    <div className="flex items-center justify-between">
                    <FormLabel>T-Shirt Size</FormLabel>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                                <Ruler className="mr-1 h-3 w-3"/>
                                View Size Guide
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>T-Shirt Size Guide</DialogTitle>
                                <DialogDescription>All measurements are in inches.</DialogDescription>
                            </DialogHeader>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Size</TableHead>
                                        <TableHead>Chest</TableHead>
                                        <TableHead>Length</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tshirtSizes.map((s) => (
                                        <TableRow key={s.size}>
                                            <TableCell className="font-medium">{s.size}</TableCell>
                                            <TableCell>{s.chest}</TableCell>
                                            <TableCell>{s.length}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </DialogContent>
                    </Dialog>
                    </div>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                        <SelectValue placeholder="Select your size" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem value="S">S (Small)</SelectItem>
                        <SelectItem value="M">M (Medium)</SelectItem>
                        <SelectItem value="L">L (Large)</SelectItem>
                        <SelectItem value="XL">XL (Extra Large)</SelectItem>
                        <SelectItem value="XXL">XXL (Double Extra Large)</SelectItem>
                    </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>
        
        <Button type="submit">Update Profile</Button>
      </form>
    </Form>
  );
}
