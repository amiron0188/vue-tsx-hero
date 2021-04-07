import { defineComponent, reactive, PropType } from 'vue';
import { HeroType } from '@/store/modules/hero';

export default defineComponent({
    name: 'FreeHeroItem',
    props: {
        freeheros: {
            type: Array as PropType<HeroType[]>,
            default: []
        }
    },
    setup(props) {
        const data = reactive({
            itemHover: 0
        })
        return () => (
            <>
            {
            props.freeheros.map((fhero, index) => (
                <img
                    onMouseenter={() => data.itemHover = index} 
                    src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${fhero.ename}/${fhero.ename}${data.itemHover === index? '-freehover.png': '.jpg'}`}
                     style= {{
                         borderRadius: '5px',
                         height: '69px',
                         margin: '5px',
                         width: data.itemHover === index ? '224px': '69px'
                     }}
                    />
            ))
            }
            </>
        )
    }
})