<template>
  <nav aria-label="Page navigation" v-if="paginationTotal > 1">
    <ul class="pagination">
      <li :class="{ 'disabled' : currentPage <= 1 }">
        <a href="#" @click.prevent="pageChanged(currentPage - 1)" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <template v-if="needLeftDots">
        <li v-for="n in 2" :key="n" :class="activePage(n)">
          <a href="#" @click.prevent="pageChanged(n)">{{ n }}</a>
        </li>
        <li class="disabled">
          <span>...</span>
        </li>
      </template>
      <li v-for="n in paginationRange" :key="n" :class="activePage(n)">
        <a href="#" @click.prevent="pageChanged(n)">{{ n }}</a>
      </li>
      <template v-if="needRightDots">
        <li class="disabled">
          <span>...</span>
        </li>
        <li v-for="n in [paginationTotal-1, paginationTotal]" :key="n" :class="activePage(n)">
          <a href="#" @click.prevent="pageChanged(n)">{{ n }}</a>
        </li>
      </template>
      <li :class="{ 'disabled' : currentPage >= paginationTotal }">
        <a href="#" @click.prevent="pageChanged(currentPage + 1)" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { range } from 'lodash'
export default {
  name: 'paginator',
  props: {
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: false,
      default: 5
    }
  },
  computed: {
    maxRange () {
      return 11
    },

    hasMoreThanMaxRange () {
      return this.paginationTotal > this.maxRange
    },

    needLeftDots () {
      return this.hasMoreThanMaxRange && (this.currentPage - 4) >= 3
    },

    needRightDots () {
      return this.hasMoreThanMaxRange && (this.currentPage + 4) <= (this.paginationTotal - 2)
    },

    paginationTotal () {
      return Math.ceil(this.total / this.perPage)
    },

    paginationRange () {
      if (this.hasMoreThanMaxRange) {
        let start, end

        if (!this.needLeftDots) {
          start = 1
          end = 9

        } else if (!this.needRightDots) {
          start = this.paginationTotal - 8
          end = this.paginationTotal + 1

        } else {
          start = this.currentPage - 3
          end = this.currentPage + 4

          start = (start < 1) ? 1 : start
          end = (end > this.paginationTotal) ? this.paginationTotal + 1 : end
        }

        return range(start, end)
      }

      return this.paginationTotal
    }
  },
  methods: {
    pageChanged (pageNum) {
      this.$emit('page-changed', pageNum)
      this.$router.push({
        query: {
          page: pageNum
        }
      })
    },

    activePage (pageNum) {
      return this.currentPage === pageNum ? 'active' : ''
    }
  },
  mounted () {
    this.$emit('page-changed', parseInt(this.$route.query.page) || 1)
  }
}
</script>

<style scoped>
  li.disabled,
  li.active {
    pointer-events: none;
  }
</style>

