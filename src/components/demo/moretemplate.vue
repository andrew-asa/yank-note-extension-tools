<template>
    <moretemplate :templates="templates"></moretemplate>
</template>
<script lang="ts">
import Moretemplate from '@/components/moretemplate/moretemplate.vue';
export default {
    components: {
        Moretemplate
    },
    setup() {

        const templates = [{
            id: "acb",
            descript: "星期几",
            template: "{{今天}} {{星期几}}",
            updateTime:"1677392897093",
        }, {
            id: "efg",
            descript: "日期",
            template: `[上一日](./{{昨天}}.md)\n[下一日](./{{明天}}.md)`,
            updateTime:"1677392897093"
        }, {
            id: "hfg",
            descript: "测试a",
            template: "今天是个好日子",
            updateTime:"1677392897093"
        },{
            id: "acba",
            descript: "星期几a",
            template: "{{星期几}}",
            updateTime:"1677392897093",
        }, {
            id: "efga",
            descript: "日期a",
            template: "{{date-yyyy-mm-dd}}",
            updateTime:"1677392897093"
        }, {
            id: "hfga",
            descript: "测试a",
            template: "今天是个好日子a",
            updateTime:"1677392897093"
        }]
        return {
            templates
        }
    },
    methods: {

    }
}

</script>


<style>

</style>
