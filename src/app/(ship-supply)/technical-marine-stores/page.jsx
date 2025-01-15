import { getTechnicalMarineStores } from '@/services';
import TechnicalMarineStoresTemplate from "@/templates/TechnicalMarineStores"

const TechnicalMarineStores = async () => {
    const data = await getTechnicalMarineStores();
    // console.log(data,"This is aTechnicalMarineStores")
    return <TechnicalMarineStoresTemplate {...data} />
}

export default TechnicalMarineStores