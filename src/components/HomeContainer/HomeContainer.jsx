import {CarouselHome} from "../CarouselHome/CarouselHome";
import { SectionConocenos } from "../SectionConocenos/SectionConocenos"
import { SectionOfrecemos } from "../SectionOfrecemos/SectionOfrecemos"

export const HomeContainer = () => {
    return(
        <div>
            <CarouselHome/>
            <SectionConocenos/>
            <SectionOfrecemos/>
        </div>
    )
}