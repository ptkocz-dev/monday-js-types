import mondaySdk from 'monday-sdk-js';

// Jak mam zrobione declare module 'monday-sdk-js' w pliku monday-sdk.d.ts to
// stała monday ma typ any a jak tego nie zrobie to mam błąd
// ze openPlanSelection nie jest prawidłowym argumentem funkcji execute

const monday = mondaySdk();

monday.execute('openItemCard', { itemId: 123 });

monday.execute('openPlanSelection');
