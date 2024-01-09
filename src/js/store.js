import { reactive } from 'vue'

export const store = reactive({
    
    //Blog Posts
    postsList: [
        {
            imageSource: "blo1-390x250",
            author: "Gogrin",
            date: "17 Dec 2022",
            title: "Where I live I am surrounded by fresh, organic food, so I eat really well.",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores quasi at quam, omnis distinctio repudiandae. Doloribus at aliquam earum? Voluptates deserunt iure non sunt delectus quaerat eum quia tempore."
        },
        {
            imageSource: "blo2-390x250",
            author: "Gogrin",
            date: "16 Dec 2022",
            title: "What we get at home is 100% organic food. We are also 90% vegetarian.",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores quasi at quam, omnis distinctio repudiandae. Doloribus at aliquam earum? Voluptates deserunt iure non sunt delectus quaerat eum quia tempore."
        },
        {
            imageSource: "blo3-390x250",
            author: "Gogrin",
            date: "15 Dec 2022",
            title: "If we as a society are willing to have a preference for organic food farmer.",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores quasi at quam, omnis distinctio repudiandae. Doloribus at aliquam earum? Voluptates deserunt iure non sunt delectus quaerat eum quia tempore."
        },
    ],

    //Footer
    footerLinks: [
        {
            content: "Organic Food Shop",
            url: "#",
        },
        {
            content: "Our Term & Condition",
            url: "#",
        },
        {
            content: "Gogrin Faq Selection",
            url: "#",
        },
        {
            content: "Our Team Member",
            url: "#",
        },
        {
            content: "Our Latest News Feed",
            url: "#",
        },
    ]
});