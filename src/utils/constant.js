export const countryOptions = [
    {
        value: 'IN',
        label: 'India'
    },
    {
        value: 'US',
        label: 'United State'
    },
    {
        value: 'BAN',
        label: 'Bangladesh'
    },
    {
        value: 'AUS',
        label: 'Australia'
    },
    {
        value: 'UK',
        label: 'United Kingdom'
    },
]

export const getCountryLabel = (value, options) => {
    const option = options.find(option => option.value === value);
    return option ? option.label : value;
};

