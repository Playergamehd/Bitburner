export function triangle(input) {
	function perm(input, layer = 0, index = 0) {
		if (layer >= input.length - 1) return input[layer][index]
		const left = perm(input, layer + 1, index)
		const right = perm(input, layer + 1, index + 1)
		const current = input[layer][index]
		return Math.min(left + current, right + current)
	}
	return perm(input)
}

export async function main(ns) {
	test(ns)
}

function test(ns) {
	const tests = [
		{
			input: [
				[6],
				[5, 4],
				[5, 1, 5],
				[4, 4, 9, 6],
				[4, 4, 3, 3, 9],
				[3, 5, 7, 3, 7, 8],
				[1, 3, 4, 8, 7, 5, 6],
				[3, 6, 2, 1, 3, 2, 4, 9],
				[6, 8, 2, 7, 5, 8, 6, 9, 8],
				[5, 2, 1, 6, 5, 8, 8, 3, 3, 4],
			],
			output: 32,
		},
		{
			input: [
				[9],
				[5, 5],
				[8, 3, 6],
				[8, 6, 9, 1],
				[7, 6, 4, 1, 7],
				[8, 1, 2, 7, 9, 4],
				[8, 1, 5, 2, 5, 1, 5],
				[4, 6, 8, 3, 4, 6, 2, 8],
			],
			output: 34,
		},
		{
			input: [
				[3],
				[4, 7],
				[3, 5, 2],
				[4, 8, 5, 1],
				[3, 5, 1, 5, 9],
				[8, 5, 5, 3, 7, 8],
			],
			output: 21,
		},
		{
			input: [
				[5],
				[5, 1],
				[1, 4, 5],
				[1, 8, 9, 6],
				[6, 7, 3, 7, 8],
				[7, 7, 4, 5, 3, 5],
				[4, 7, 5, 9, 8, 3, 8],
				[1, 4, 4, 6, 7, 4, 2, 5],
				[8, 5, 5, 8, 5, 1, 2, 2, 6],
				[9, 2, 3, 8, 5, 7, 9, 2, 6, 1],
				[3, 7, 7, 5, 5, 3, 4, 4, 8, 3, 5],
			],
			output: 40,
		},
		{
			input: [
				[9],
				[5, 6],
				[4, 5, 6],
				[6, 9, 9, 3],
				[3, 5, 9, 3, 2],
				[5, 8, 2, 7, 4, 8],
				[1, 3, 6, 2, 6, 6, 1],
				[9, 1, 9, 4, 7, 4, 4, 3],
				[8, 3, 1, 3, 3, 7, 7, 5, 7],
				[6, 8, 4, 5, 6, 9, 6, 2, 1, 3],
				[4, 6, 8, 6, 2, 7, 3, 2, 4, 6, 6],
				[7, 1, 2, 2, 4, 8, 1, 6, 6, 2, 1, 2],
			],
			output: 46,
		},
	]
	for (const data of tests) {
		const input = data.input
		const output = data.output
		const answer = triangle(input)
		ns.tprint("-")
		ns.tprint(output)
		ns.tprint(answer)
		ns.tprint("-")
	}
}
