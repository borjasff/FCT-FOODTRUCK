export const formatMoney = quantity => {
    return quantity.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
    });
};
