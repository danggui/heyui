<template>
  <div :class="taginputCls">
    <span v-for="(v, index) of values" :key="v">
      <span>{{v}}</span>
      <i v-if="!readonly" class="h-icon-close" @click.stop="remove(index)"></i>
    </span>
    <input v-if="!readonly" type="text" class="h-taginput-input" @focus="focusing=true" v-model="tagvalue" @blur="blur" @keyup.enter="add" v-wordlimit="wordlimit" :placeholder="placeholder" />
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefix = 'h-taginput';

export default {
  name: 'TagInput',
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      // default: "请输入"
    },
    type: {
      type: String,
      default: "Array" //String
    },
    split: {
      type: String,
      default: ","
    },
    wordlimit: {
      type: Number,
      default: 50
    },
    limit: {
      type: Number,
      default: 10000
    },
    value: [Array, String]
  },
  data() {
    return {
      focusing: false,
      tagvalue: ''
    };
  },
  methods: {
    remove(index) {
      if (this.readonly) return;
      let value = utils.copy(this.values);
      value.splice(index, 1);
      this.setvalue(value);
    },
    add() {
      if (this.limit <= this.values.length) {
        this.$Message.error('您输入的已经超过限制');
        return false;
      }
      if (this.readonly) return false;
      if (this.tagvalue === '') return false;
      let value = utils.copy(this.values);
      value.push(this.tagvalue);
      this.setvalue(value);
    },
    setvalue(value) {
      if (this.type == 'string') {
        value = value.join(this.split);
      }
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.tagvalue = '';
    },
    blur() {
      let result = this.add();
      this.focusing = false;
    }
  },
  computed: {
    taginputCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: !this.noBorder && !this.readonly,
        [`${prefix}-readonly`]: this.readonly,
        focusing: this.focusing
      }
    },
    values() {
      if (this.type == 'Array') {
        return this.value || [];
      }
      return (this.value || '').split(this.split);
    }
  }
};
</script>