import '../../styles/components/ItemListContainer.css'
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    return (
        <section className="sectionItemContainer">
            <h2>¿Que ofrecemos?</h2>
            <ItemList />
        </section>
    )
}