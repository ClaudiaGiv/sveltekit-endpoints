import { operationStore } from '@urql/svelte';

export async function get() {
	console.log("before urql op from board1")
	let board = operationStore(
		`
    	query boardByUserId($userId: String!) {
				boardByUserId(userId: $userId) {
					data {
						_id
						title
						description
						locked
						columns {
							data {
								_id
								title
								description
								weight
								cards {
									data {
										_id
										title
										description
										weight
									}
								}
							}
						}
					}
				}
			}`,
		{ userId: '293327431033422337' }
	);
	console.log("before urql query from board1")
	console.log(board);
	console.log("board")

	console.log(board);
	return {
		body: board
	};
}
