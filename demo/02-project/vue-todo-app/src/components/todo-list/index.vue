<template>
  <ul class="todo-main">
    <li>
      <label>
        <input type="checkbox"/>
        <span>xxxxx</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
    <li>
      <label>
        <input type="checkbox"/>
        <span>yyyy</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
  </ul>
</template>

<script>
  export default {

  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
