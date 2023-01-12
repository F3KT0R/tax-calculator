export function getConvertedData(current_value, convert_value, gross, net, tax){

    const weeklyToAny = (convert_value, gross, net, tax) => {
        if(convert_value === 'fortnightly') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross * 2) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net * 2) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax * 2) + Number.EPSILON) * 100) / 100
            };
        else if(convert_value === 'monthly') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross * 4.34524) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net * 4.34524) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax * 4.34524) + Number.EPSILON) * 100) / 100
            };
        else if(convert_value === 'anually') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross * 52.1429) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net * 52.1429) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax * 52.1429) + Number.EPSILON) * 100) / 100
            };
    }

    const fortnightlyToAny = (convert_value, gross, net, tax) => {
        if(convert_value === 'weekly') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross / 2) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net / 2) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax / 2) + Number.EPSILON) * 100) / 100
            };
        else if(convert_value === 'monthly') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross * 2.17262) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net * 2.17262) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax * 2.17262) + Number.EPSILON) * 100) / 100
            };
        else if(convert_value === 'anually') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross * 26.07145) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net * 26.07145) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax * 26.07145) + Number.EPSILON) * 100) / 100
            };
    }

    const monthlyToAny = (convert_value, gross, net, tax) => {
        if(convert_value === 'weekly') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross / 4.34524) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net / 4.34524) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax / 4.34524) + Number.EPSILON) * 100) / 100
            };
        else if(convert_value === 'fortnightly') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross / 2.17262) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net / 2.17262) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax / 2.17262) + Number.EPSILON) * 100) / 100
            };
        else if(convert_value === 'anually') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross * 12) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net * 12) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax * 12) + Number.EPSILON) * 100) / 100
            };
    }

    const anuallyToAny = (convert_value, gross, net, tax) => {
        if(convert_value === 'weekly') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross / 52.1429) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net / 52.1429) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax / 52.1429) + Number.EPSILON) * 100) / 100
            };
        else if(convert_value === 'fortnightly') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross / 26.07145) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net / 26.07145) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax / 26.07145) + Number.EPSILON) * 100) / 100
            };
        else if(convert_value === 'monthly') return {
            occurance: convert_value, 
            gross_income: Math.round(((gross / 12) + Number.EPSILON) * 100) / 100,
            net_income: Math.round(((net / 12) + Number.EPSILON) * 100) / 100,
            tax: Math.round(((tax / 12) + Number.EPSILON) * 100) / 100
            };
    }
      
    if(current_value === 'weekly') return weeklyToAny(convert_value, gross, net, tax)
    else if(current_value === 'fortnightly') return fortnightlyToAny(convert_value, gross, net, tax)
    if(current_value === 'monthly') return monthlyToAny(convert_value, gross, net, tax)
    if(current_value === 'anually') return anuallyToAny(convert_value, gross, net, tax)
}