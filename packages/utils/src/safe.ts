export async function safeAsync<T = unknown>(
	promise: Promise<T>
): Promise<{ success: true; data: T } | { success: false; error: any }> {
	try {
		const data = await promise;
		return {
			success: true,
			data,
		};
	} catch (error) {
		return {
			success: false,
			error,
		};
	}
}

export function safeSync<T = unknown>(
	operation: () => T
): { success: true; data: T } | { success: false; error: any } {
	try {
		const data = operation();
		return {
			success: true,
			data,
		};
	} catch (error) {
		return {
			success: false,
			error,
		};
	}
}
