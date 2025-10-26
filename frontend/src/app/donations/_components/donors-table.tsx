
'use client';

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { donations, type Donation } from "@/lib/donations-data";
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DonorsTable() {
    const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('desc');
    
    const sortedDonations = React.useMemo(() => {
        const sorted = [...donations].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.amount - b.amount;
            }
            return b.amount - a.amount;
        });
        return sorted;
    }, [sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    }

    return (
        <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Batch</TableHead>
                        <TableHead className="text-right">
                           <Button variant="ghost" onClick={toggleSortOrder}>
                                Amount
                                <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedDonations.map((donation, index) => (
                    <TableRow key={donation.name + index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={donation.avatar} alt={donation.name} />
                                    <AvatarFallback>{donation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="font-medium">{donation.name}</span>
                                    {donation.isFeatured && <Badge variant="default" className="w-fit bg-amber-500 text-white">Top Donor</Badge>}
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>{donation.batch}</TableCell>
                        <TableCell className="text-right font-semibold">{donation.amount.toLocaleString()}tk</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
