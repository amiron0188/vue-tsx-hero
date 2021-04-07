import { defineComponent, computed, reactive } from 'vue';
import { Row, Col, Card, Radio } from 'ant-design-vue';
import { useStore } from 'vuex';
import { HeroType } from '@/store/modules/hero';
import FreeHeroItem  from './componets/FreeHeroItem';
import style from './index.module.scss';

const RadioGroup = Radio.Group;

const heroType = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch('hero/getHeros');
    store.dispatch('hero/getFreeHeros');

    const data = reactive({
      filterKey: 0,
      heros: computed(() => store.state.hero.heros),
      freeheros: computed(() => store.state.hero.freeheros)
    });



    const onChange = (e: any) => {
      data.filterKey = e.target.value;
    }
    return () => (
      
      <>
        <div class={style.normal}>
          <div class={style.info}>
            <Row class={style.freehero}>
              <Col span={24}>
                <p>周免英雄</p>
                <FreeHeroItem freeheros={data.freeheros}/>
              </Col>

            </Row>
          </div>
        
      <Card class={style.radioPanel}>
            <RadioGroup onChange={onChange} value={data.filterKey}>
              {
                heroType.map(data => (
                  <Radio value={data.key} key={`hero-rodio-${data.key}`}>
                    {data.value}
                  </Radio>
                ))
              }
            </RadioGroup>
          </Card>

          <Row>
            {
              data.heros
                .filter((hero: HeroType) => data.filterKey === 0 || hero.hero_type === data.filterKey)
                 .map((hero: HeroType) => (
                  <Col key={hero.ename} span={3} class={style.heroitem}>
                  <img src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${hero.ename}.jpg`} />
                  <p>{hero.cname}</p>
                  </Col>
                ))
            }
          </Row>


        </div>
      </>
    );
  }
});