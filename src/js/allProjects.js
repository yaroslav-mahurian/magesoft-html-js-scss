import CardPagination from './cardPagination';
import postsFilter from './postsFilter';


const cardPaginationFunc = new CardPagination();
const postsFilterFunc = new postsFilter();


cardPaginationFunc.init('[data-card-page-container]', '[data-card-page]');
postsFilterFunc.init('[data-section-filter-container]', 'data-section-filter-el-all', '[data-section-filter-el]');