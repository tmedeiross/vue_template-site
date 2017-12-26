<template>
  <div id="search-table-example" class="container">
    <div class="page-header">
      <h2>Tasks</h2>
    </div>

    <p>Current page: {{ currentPage }}</p>
    <p>Total: {{ total }}</p>
    <p>Showing: {{ tasks.length }}</p>

    <div class="form-group">
      <input type="search" v-model="search" placeholder="Search..." class="form-control">
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <th>{{ task.id }}</th>
            <td>{{ task.user.name }}</td>
            <td>{{ task.title }}</td>
            <td>{{ task.description }}</td>
            <td>
              <button class="btn btn-primary btn-xs">Edit</button>
              <button class="btn btn-danger btn-xs" @click="deleteUser(props.index, props.id)">Remove</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>

    <paginator :current-page="currentPage"
               :total="total"
               :per-page="perPage"
               @page-changed="pageChanged">
    </paginator>
  </div>
</template>

<script>
import axios from 'axios'
import { debounce } from 'lodash'
import BasicTable from '@/shared/components/BasicTable'
import Paginator from '@/shared/components/Paginator'
export default {
  name: 'search-table-example',
  data () {
    return {
      tasks: [],
      currentPage: 1,
      total: 0,
      perPage: 10,
      search: ''
    }
  },
  watch: {
    search: debounce(function () {
      this.currentPage = 1
      this.getUsers()
    }, 200)
  },
  methods: {
    getUsers () {
      axios.get(`/search/tasks?q=${this.search}&page=${this.currentPage}&per_page=${this.perPage}`).then(response => {
        this.tasks = response.data.data
        this.total = response.data.total
        console.log(response.data)
      })
    },
    
    deleteUser (index, id) {
      alert(index)
      alert(id)
      this.tasks.splice(index, 1)
    },

    pageChanged (pageNum) {
      this.currentPage = pageNum
      this.getUsers()
    }
  },
  components: {
    BasicTable,
    Paginator
  }
}
</script>

<style scoped>
</style>
