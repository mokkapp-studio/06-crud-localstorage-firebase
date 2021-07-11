<template>
    <el-form-item label="Name">
      <el-input 
        size="mini"
        v-model.trim="tarea.name"
      ></el-input>
    </el-form-item>

    <el-form-item label="Tech">
      <el-select 
        size="mini"
        v-model="tarea.region" 
        placeholder="please select your zone"
      >
        <el-option label="Front" value="front"></el-option>
        <el-option label="Back" value="back"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="Type">
      <el-checkbox-group v-model="tarea.type">
        <el-checkbox label="React" name="type"></el-checkbox>
        <el-checkbox label="Vue" name="type"></el-checkbox>
        <el-checkbox label="Angular" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="Number">
      <el-input 
        type="number" 
        placeholder="Number" 
        size="mini"
        v-model.number="tarea.input">
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-radio-group v-model="tarea.resource">
        <el-radio label="A">Option A</el-radio>
        <el-radio label="B">Option B</el-radio>
      </el-radio-group>
    </el-form-item>
</template>

<script>
export default {
    props: {
        tarea: Object,
    }
}
</script>

<style>

</style>