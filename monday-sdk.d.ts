declare module 'monday-sdk-js' {
	import mondaySdk from 'monday-sdk-js';

	export interface MondayClientSdk {
		execute(
			type: 'openPlanSelection',
			params: {
				isInPlanSelection: boolean;
			}
		): Promise<any>;
	}

	export = mondaySdk;
}
