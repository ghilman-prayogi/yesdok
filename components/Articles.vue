<template>
    <section class="relative py-8 flex">
        <div class="container max-w-5xl mx-auto">
            <div class="grid grid-cols-3 gap-8">
                <div class="col-span-2">
                    <div class="title font-semibold py-3 border-b-2 border-regal-blue">
                        Artikel Terbaru
                    </div>
                    <ArticleNewest />
                </div>
                <div>
                    <div class="article-newest mb-8">
                        <div class="title font-semibold py-3 border-b-2 border-regal-blue">
                            Artikel Covid
                        </div>
                        <ArticleHealth />
                    </div>
                    <div>
                        <div class="title font-semibold py-3 border-b-2 border-regal-blue">
                            Artikel Populer
                        </div>
                        <ArticlePopular />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>