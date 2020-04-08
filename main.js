const app = new Vue({
    el:'#app',
    data:{
        books:[{
            id: 1,
            name: "算法",
            date: "2006-9",
            price:85.00,
            count:1
        },
        {
            id: 2,
            name: "编程艺术",
            date: "2006-2",
            price:59.00,
            count:1
        },
        {
            id: 3,
            name: "编程珠玑",
            date: "2008-10",
            price:39.00,
            count:1
        },
        {
            id: 4,
            name: "代码大全",
            date: "2006-3",
            price:128.00,
            count:1
        }]
    },
    methods:{
        Add(index){
            this.books[index].count++
        },
        Sub(index){
            this.books[index].count--
        },
        DeleteItem(index){
            this.books.splice(index,1)
        }
     },
    computed:{
        FinalPrice(){
            // let sum=0
            // for(let i=0;i<this.books.length;i++){
            //     sum = sum+ this.books[i].price*this.books[i].count
            // }
            return this.books.reduce(function(pre,books){
                return pre+books.count*books.price
            },0)
        }
    },
    filters:{
        TotalPrice(price){
            return "￥"+price.toFixed(2)
        }
    }
})