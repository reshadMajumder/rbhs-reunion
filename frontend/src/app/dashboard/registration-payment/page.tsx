'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { API_BASE_URL } from '@/lib/constants';
import { fetchWithAuth } from '@/lib/api';

const paymentSchema = z.object({
  transaction_id: z.string().min(1, 'Transaction ID is required.'),
  method: z.enum(['bkash', 'nagad', 'rocket'], { required_error: 'Payment method is required.' }),
  phone: z.string().min(1, 'Phone number is required.'),
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

function RegistrationPaymentPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const amount = searchParams.get('amount');
  const paymentType = 'registration';

  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
  });

  async function onSubmit(data: PaymentFormValues) {
    if (!amount) {
        toast({ variant: 'destructive', title: 'Error', description: 'Amount is missing.' });
        return;
    }

    const paymentData = {
        ...data,
        amount,
        payment_type: paymentType,
    };

    try {
        const response = await fetchWithAuth(`${API_BASE_URL}/api/payment/get-create/`, {
            method: 'POST',
            body: JSON.stringify(paymentData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Failed to submit payment.');
        }

        toast({
            title: 'Payment Submitted',
            description: 'Your payment is being processed. You will be redirected shortly.',
        });
        
        // Redirect to dashboard after a short delay
        setTimeout(() => router.push('/dashboard'), 2000);

    } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Submission Failed',
            description: error.message || 'An unexpected error occurred.',
        });
    }
  }

  if (!amount) {
      return (
          <div className="text-center py-12">
              <p className="text-lg text-destructive">Invalid payment amount.</p>
              <Button onClick={() => router.push('/dashboard')} className="mt-4">
                  Return to Dashboard
              </Button>
          </div>
      )
  }

  return (
    <div className="flex justify-center items-center py-12">
        <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle>Complete Registration Payment</CardTitle>
                <CardDescription>
                    Your registration fee is <span className="font-bold text-primary">{Number(amount).toLocaleString()}tk</span>.
                    Please send this amount to one of our official numbers and enter the transaction details below.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Official numbers can be listed here */}
                <div className="mb-6 p-4 bg-muted rounded-lg text-sm">
                    <p className="font-bold">Official Payment Numbers:</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>bKash (Merchant): <span className="font-mono">01234567890</span></li>
                        <li>Nagad (Personal): <span className="font-mono">01987654321</span></li>
                    </ul>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Your Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="The number you paid from" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="method"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Payment Method</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a payment method" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="bkash">bKash</SelectItem>
                                    <SelectItem value="nagad">Nagad</SelectItem>
                                    <SelectItem value="rocket">Rocket</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="transaction_id"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Transaction ID (TrxID)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the TrxID from your payment message" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Submitting...' : 'Submit Payment'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  );
}


export default function RegistrationPaymentPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegistrationPaymentPageContent />
        </Suspense>
    )
}
