<template>
  <div>
    <div class="form-group">
      <input type="search" v-model="filter" placeholder="Search..." class="form-control">
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th :key="index" v-for="(column, index) in columns.split(',')" @click="setOrder(column)">{{ column.ucwords() }}</th>
            <th v-if="!noActions"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in filtered" :key="index">
            <td v-for="(column, index) in columns.split(',')" :key="index">{{ data[column] }}</td>
            <td v-if="!noActions">
              <slot name="actions" :id="data.id" :index="index"></slot>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th v-for="(column, index) in columns.split(',')" :key="index" @click="setOrder(column)">{{ column.ucwords() }}</th>
            <th v-if="!noActions"></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { orderBy, isEmpty } from 'lodash'
import filter from '@/shared/Functions/filter'
export default {
  props: [
    'data',
    'no-actions',
    'columns'
  ],
  name: 'basic-table',
  data () {
    return {
      filter: '',
      filterBy: '*',
      orderBy: 'name',
      order: 'desc'
    }
  },
  computed: {
    filtered () {
      if (isEmpty(this.data)) {
        return []
      }

      const filtered = filter(this.filter, this.data, this.filterBy)

      return orderBy(filtered, this.orderBy, this.order)
    }
  },
  methods: {
    setOrder (by) {
      this.orderBy = by
      this.order = this.order === 'desc' ? 'asc' : 'desc'
    }
  }
}
</script>

<style scoped>
  th {
    cursor: pointer;
  }
</style>
