import { defineComponent, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { Row, Col, Radio, Card } from 'ant-design-vue';
import { SummonerType } from '@/store/modules/summoner';
import style from './index.module.scss';


export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch('summoner/getSummoners');

    const data = reactive({
      summoners: computed(() => store.state.summoner.summoners)
    })

    return () => (
      <>
        <Row>
          {
            data.summoners.map((summoner: SummonerType) => (
              <Col key={summoner.summoner_id} span={3} class={style.heroitem}>
              <img src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${summoner.summoner_id}.jpg`} />
              <p>{summoner.summoner_name}</p>
            </Col>
            ))
          }
        </Row>
      </>
    );
  }
});