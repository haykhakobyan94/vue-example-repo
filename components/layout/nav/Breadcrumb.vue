<template>
    <ul class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList" aria-label="Breadcrumb" role="navigation">
        <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
            class="breadcrumb__item"
        >
            <a
                itemprop="item"
                href="/"
                class="breadcrumb__link"
            >
                <span itemprop="name">Главная</span>
            </a>
            <meta itemprop="position" content="1" />
        </li>
        <svg-icon name="chevron-right" width="0.8rem" height="0.8rem" />

        <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
            class="breadcrumb__item"
        >
            <a
                itemscope
                itemtype="https://schema.org/WebPage"
                itemprop="item"
                itemid="/catalog"
                href="/catalog"
                class="breadcrumb__link"
            >
                <span itemprop="name">Каталог</span>
            </a>
            <meta itemprop="position" content="2" />
        </li>
        <svg-icon name="chevron-right" width="0.8rem" height="0.8rem" />

        <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
            class="breadcrumb__item"
        >
            <a
                itemscope
                itemtype="https://schema.org/WebPage"
                itemprop="item"
                itemid="/catalog"
                href="/catalog/chanel"
                class="breadcrumb__link"
            >
                <span itemprop="name">Chanel</span>
            </a>
            <meta itemprop="position" content="3" />
        </li>
        <svg-icon name="chevron-right" width="0.8rem" height="0.8rem" />

        <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
            class="breadcrumb__item"
        >
            <a
                itemscope
                itemtype="https://schema.org/WebPage"
                itemprop="item"
                itemid="/catalog"
                href="/catalog/chanel/bleu-de-chanel"
                class="breadcrumb__link"
            >
                <span itemprop="name">Chanel Bleu de Chanel</span>
            </a>
            <meta itemprop="position" content="4" />
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Breadcrumb'
}
</script>

<style lang="less">
	.breadcrumb {
		display: block;
		padding-left: pxToRem(20);
		max-width: 100%;
		height: pxToRem(44);
		line-height: pxToRem(44);
		overflow-x: scroll;
		list-style: none;
		font-size: pxToRem(13);
		white-space: nowrap;
		color: @color-gray;

		&__item {
			display: inline-block;
			margin: 0 pxToRem(8);

			&:first-child,
			&:last-child {
				margin-left: 0;
			}

		}

		&__link {
			color: inherit;
		}

	}
</style>
