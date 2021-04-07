import {  reactive, computed, defineComponent } from 'vue';
import { Layout, Menu } from 'ant-design-vue';
import { useRoute, RouterLink } from 'vue-router';
import style from './index.module.scss';

const { Header, Content, Footer } = Layout;
const menuData = [
  { route: '/hero', name: '英雄'},
  { route: '/item', name: '局内道具'},
  { route: '/summoner', name: '召唤师技能'}
]

export default defineComponent({
  setup() {
    const route = useRoute();
    const pathname = computed(() => route.path).value;
    return () => (
      <>
        <Layout>
          <Header>
            <div class={style.logo}>王者荣耀资料库</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[pathname]}
              style={{ lineHeight: '64px' }}
            >
              {menuData.map(menu => (
                  <Menu.Item key={menu.route}>
                    <RouterLink to={menu.route}>{menu.name}</RouterLink>
                  </Menu.Item>     
              ))
              }

            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <router-view/>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Vue Jsx 入门
          </Footer>
        </Layout>
      </>
    );
  }
});