import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute();

        return () => (
            <div>this is detail {route.path} page</div>
        )
    }
})