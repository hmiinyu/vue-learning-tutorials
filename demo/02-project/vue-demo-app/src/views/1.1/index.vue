<template>
  <a-tabs>
    <a-tab-pane key="props" tab="属性">
      <props name="Hello Vue!"
             :type="type"
             :visible="true"
             :on-change="handlePropChange"
             title="Vue属性组件"
             class="test1"
             :class="['test2']"
             :style="{ marginTop: '20px' }"
             style="margin-top: 10px"
      />
    </a-tab-pane>
    <a-tab-pane key="event" tab="事件">

    </a-tab-pane>
  </a-tabs>
</template>

<script>
  import Props from '@/views/1.1/props'

  export default {
    data() {
      return {
        type: 'success'
      }
    },
    methods: {
      handlePropChange(val) {
        this.type = val
      }
    },
    components: {
      Props
    }
  }
</script>
