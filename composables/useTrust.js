export const useTrust = async () => {
    const { find } = useStrapi()
    try {
        const response = await find('trustpilot?populate=*');
        console.log("response from strapi: ", response.data.attributes.customer)
        return response
    } catch(err) {
        console.log("the error: ", err)
    }
}