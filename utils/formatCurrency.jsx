const formatCurrency = (money) => {
    return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'VND'}).format(money)
}

export default formatCurrency;