
export type Donation = {
    name: string;
    batch: string;
    amount: number;
    isFeatured: boolean;
    avatar: string;
};

export const donations: Donation[] = [
    { name: 'Anisul Islam', batch: '2002', amount: 10000, isFeatured: true, avatar: '/avatars/anisul.png' },
    { name: 'Jankar Mahbub', batch: '2000', amount: 7500, isFeatured: false, avatar: '/avatars/jhankar.png' },
    { name: 'Sumit Saha', batch: '2005', amount: 5000, isFeatured: false, avatar: '/avatars/sumit.png' },
    { name: 'Jhankar Mahbub', batch: '2001', amount: 8000, isFeatured: false, avatar: '/avatars/jhankar.png' },
    { name: 'Hasin Hayder', batch: '1999', amount: 12000, isFeatured: true, avatar: '/avatars/hasin.png' },
    { name: 'Rasel Ahmed', batch: '2003', amount: 4000, isFeatured: false, avatar: '/avatars/rasel.png' },
    { name: 'HM Nayeem', batch: '2010', amount: 6000, isFeatured: false, avatar: '/avatars/nayeem.png' },
    { name: 'Mizanur Rahman', batch: '2008', amount: 7000, isFeatured: false, avatar: '/avatars/mizanur.png' },
    { name: 'Suhag Al Amin', batch: '2012', amount: 3000, isFeatured: false, avatar: '/avatars/suhag.png' },
    { name: 'Andrean Chowdhury', batch: '2015', amount: 9000, isFeatured: false, avatar: '/avatars/andrean.png' },
    { name: 'Fayez Ahmed', batch: '2006', amount: 5500, isFeatured: false, avatar: '/avatars/fayez.png' },
    { name: 'Rakibalom', batch: '2009', amount: 4500, isFeatured: false, avatar: '/avatars/rakib.png' },
    { name: 'Shorif uddin', batch: '2011', amount: 6500, isFeatured: false, avatar: '/avatars/shorif.png' },
    { name: 'Mezbaul Abedin', batch: '2004', amount: 8500, isFeatured: false, avatar: '/avatars/mezbaul.png' },
    { name: 'Mir Hussain', batch: '2007', amount: 9500, isFeatured: false, avatar: '/avatars/mir.png' },
    { name: 'Ashraful Islam', batch: '2013', amount: 3500, isFeatured: false, avatar: '/avatars/ashraful.png' },
];
