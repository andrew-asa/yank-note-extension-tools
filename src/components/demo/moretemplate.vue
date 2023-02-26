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
            id:"acb",
            descript: "星期几",
            template: "{{星期几}}"
        }, {
            id:"efg",
            descript: "日期",
            template: "{{date-yyyy-mm-dd}}"
        },, {
            id:"hfg",
            descript: "测试",
            template: "今天是个好日子"
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
