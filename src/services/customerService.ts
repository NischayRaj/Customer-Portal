export interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
}

export const getCustomers = async (): Promise<Customer[]> => {
    return [
        {
            id: 1,
            name: 'John Doe',
            title: 'Chief Executive Officer (CEO)',
            address: '123 Elm Street, Springfield, USA',
        },
        {
            id: 2,
            name: 'Jane Smith',
            title: 'Chief Technology Officer (CTO)',
            address: '456 Oak Avenue, Springfield, USA',
        },
        {
            id: 3,
            name: 'Michael Johnson',
            title: 'Chief Financial Officer (CFO)',
            address: '789 Maple Road, Springfield, USA',
        },
        {
            id: 4,
            name: 'Emily Davis',
            title: 'Chief Operating Officer (COO)',
            address: '101 Pine Lane, Springfield, USA',
        },
        {
            id: 5,
            name: 'David Wilson',
            title: 'Vice President of Marketing',
            address: '202 Birch Drive, Springfield, USA',
        },
        {
            id: 6,
            name: 'Sophia Brown',
            title: 'Director of Human Resources',
            address: '303 Cedar Street, Springfield, USA',
        },
        {
            id: 7,
            name: 'James Wilson',
            title: 'Chief Product Officer (CPO)',
            address: '404 Fir Avenue, Springfield, USA',
        },
        {
            id: 8,
            name: 'Olivia Taylor',
            title: 'Chief Strategy Officer (CSO)',
            address: '505 Spruce Drive, Springfield, USA',
        },
        {
            id: 9,
            name: 'Liam Martinez',
            title: 'Chief Marketing Officer (CMO)',
            address: '606 Pine Street, Springfield, USA',
        },
        {
            id: 10,
            name: 'Ava Anderson',
            title: 'Chief Sales Officer (CSO)',
            address: '707 Willow Lane, Springfield, USA',
        },
        {
            id: 11,
            name: 'Benjamin Harris',
            title: 'Chief Operations Officer (COO)',
            address: '808 Elm Road, Springfield, USA',
        },
        {
            id: 12,
            name: 'Isabella Clark',
            title: 'Chief Information Officer (CIO)',
            address: '909 Oak Lane, Springfield, USA',
        },
        {
            id: 13,
            name: 'Lucas Walker',
            title: 'Chief Business Development Officer',
            address: '1010 Maple Street, Springfield, USA',
        },
        {
            id: 14,
            name: 'Mia Lewis',
            title: 'Chief Innovation Officer (CIO)',
            address: '1111 Birch Avenue, Springfield, USA',
        },
        {
            id: 15,
            name: 'Ethan Robinson',
            title: 'Vice President of Sales',
            address: '1212 Cedar Lane, Springfield, USA',
        },
        {
            id: 16,
            name: 'Charlotte Young',
            title: 'Vice President of Customer Success',
            address: '1313 Fir Drive, Springfield, USA',
        },
        {
            id: 17,
            name: 'Noah Allen',
            title: 'Vice President of Finance',
            address: '1414 Spruce Street, Springfield, USA',
        },
        {
            id: 18,
            name: 'Amelia Scott',
            title: 'Vice President of Operations',
            address: '1515 Pine Lane, Springfield, USA',
        },
        {
            id: 19,
            name: 'Mason Green',
            title: 'Director of Product Management',
            address: '1616 Willow Street, Springfield, USA',
        },
        {
            id: 20,
            name: 'Harper Adams',
            title: 'Director of Technology',
            address: '1717 Elm Avenue, Springfield, USA',
        },
    ];
};
