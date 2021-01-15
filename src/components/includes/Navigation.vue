<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fix-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand mb-0 h1" href="#">GavinKenna.io</a>

            <div  class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>

                </ul>
                <li style="alignment: right">
                    <p class="navbar-brand mb-0 h1">v1.0</p>
                </li>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .fix-top{
        margin-top: -63px;
    }
</style>
