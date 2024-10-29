<template>
  <ElCard class="form-card">
    <ElForm :model="formData" :rules="rules" ref="addItemForm">
      <ElFormItem label="Type" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type..."
        >
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton type="primary" @click="onSubmitForm">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FormData",
  data: () => {
    let validateValue = (rule, value, callback) => {
      if (value === 0) {
        callback(new Error("Please, input not a zero!"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        type: "INCOME",
        comment: "",
        value: 0,
      },
      rules: {
        type: [
          { required: true, message: "Please select type", trigger: "blur" },
        ],
        comment: [
          { required: true, message: "Please input comment", trigger: "blur" },
        ],
        value: [
          { required: true, message: "Please input value", trigger: "blur" },
          {
            type: "number",
            message: "Value must be a number",
            trigger: "blur",
          },
          { validator: validateValue, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapActions("listStore", ["addNewData"]),
    onSubmitForm() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          if (this.formData.type === "OUTCOME") {
            // this.formData.value = -this.formData.value;
            // this.formData.value = String(this.formData.value).startsWith("-") ? this.formData.value : Number('-' + this.formData.value);
            this.formData.value =
              this.formData.value <= 0
                ? this.formData.value
                : Number("-" + this.formData.value);
          } else {
            this.formData.value =
              this.formData.value >= 0
                ? this.formData.value
                : this.formData.value * -1;
          }
          this.addNewData({ ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>
