<template>
	<div class="pagination">
    <button class="prev" v-bind:disabled="!hasPrev()" @click.prevent="changePage(prevPage)">Назад</button>
    <div class="pagination_mid">
      <ul>
        <li v-for="page in pages">
          <a href="#" @click.prevent="changePage(page)" :class="{current: current == page}">{{page}}</a>
        </li>
      </ul>
    </div>
    <button class="next" v-bind:disabled="!hasNext()" @click.prevent="changePage(nextPage)">Дальше</button>
	</div>
</template>

<style lang="sass" scoped>
.pagination
  button
    color: #fff
    background-color: #b88b58
    outline: none
    padding: 0 10px
    height: 35px
    line-height: 35px
    border: none
    font-size: 16px
    cursor: pointer
    &:disabled
      background-color: #eee
      color: graytext
      cursor: default
  button.prev
    margin-right: 20px
  button.next
    margin-left: 15px
  .pagination_mid
    display: inline-block
    vertical-align: top
    ul
      margin: 0
      padding: 0
      list-style-type: none
      li
        display: inline-block
        a
          text-decoration: none
          color: #000
          padding: 0 10px
          margin-right: 5px
          transition: all .2s ease
          display: block
          font-size: 16px
          height: 35px
          line-height: 35px
          &:hover
            background-color: #b88b58
            color: #fff
        a.current
          background-color: #b88b58
          color: #fff
</style>

<script>
export default {
  name: 'pagination',

  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 6
    },
    pageRange: {
      type: Number,
      default: 2
    }
  },

  computed: {
    pages () {
      var pages = []
      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      return pages
    },
    rangeStart () {
      var start = this.current - this.pageRange
      return (start > 0) ? start : 1
    },
    rangeEnd () {
      var end = this.current + this.pageRange
      return (end < this.totalPages) ? end : this.totalPages
    },
    totalPages () {
      return Math.ceil(this.total / this.perPage)
    },
    nextPage () {
      return this.current + 1
    },
    prevPage () {
      return this.current - 1
    }
  },

  methods: {
    hasPrev () {
      return this.current > 1
    },
    hasNext () {
      return this.current < this.totalPages
    },
    changePage (page) {
      this.$emit('page-changed', page)
    }
  }
}
</script>