<template>
    <header class="header">
        <h1>Culture</h1>       
        <nav class="nav-gnb">
            <ul>
                <li class = "nav-item" v-for="navItem in navCategory" :key="navItem.category_num">
                    <p>{{navItem.category_name}}</p>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
/* eslint-disable */
export default {
    created() {
        this.$http.get("/culture/category").then(response => {
            this.navCategory = response.data;
        })
    },
    data() {
        return {
            navCategory: []
        };
    }
}
</script>

<style lang="scss" scoped>
    .header {
        height: 5rem;
        width: 100%;
        background-color: aliceblue;
        position: fixed;
        display: flex;
        align-items: center;

        h1 {
            width: 7.5rem;
            font-size: 1.5625rem;
            font-weight: bold;
            margin-left: 1rem;
        }

        .nav-gnb {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 67.5rem;

            ul {
                display: flex;
                align-items: center;
                justify-content: center;

                li {
                    margin: 0 0.625rem;
                    padding: 0 0.75rem;
                    height: 1.375rem;
                    cursor: pointer;

                    p {
                        font-size: 1.125rem;
                        font-weight: normal;
                        line-height: 1.22;
                    }
                }
            }
        }

        
    }
</style>