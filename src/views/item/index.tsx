import { defineComponent, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { Row, Col, Radio, Card } from 'ant-design-vue';
import style from './index.module.scss';
import { ItemType } from '@/store/modules/item';

const RadioGroup = Radio.Group;

const itemType = [
  { key: 0, value: '全部' },
  { key: 1, value: '攻击' },
  { key: 2, value: '法术' },
  { key: 3, value: '防御' },
  { key: 4, value: '移动' },
  { key: 5, value: '打野' },
  { key: 7, value: '辅助' },
];


export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch('item/getItems');

    const data = reactive({
      filterKey: 0,
      items: computed(() => store.state.item.items)
    })

    const onChange = (e: any) => {
      data.filterKey = e.target.value;
    }
    return () => (
      <>
        <Card class={style.radioPanel}>
          <RadioGroup onChange={onChange} value={data.filterKey}>
            {
              itemType.map(data => (
                <Radio value={data.key} key={`hero-rodio-${data.key}`}>
                  {data.value}
                </Radio>
              ))
            }
          </RadioGroup>
        </Card>
        <Row>
          {
            data.items
              .filter((item: ItemType) => data.filterKey === 0 || item.item_type === data.filterKey)
              .map((item: ItemType) => (
                <Col key={item.item_id} span={3} class={style.heroitem}>
                  <img src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`} />
                  <p>{item.item_name}</p>
                </Col>
              ))
          }
        </Row>

      </>
    );
  }
});