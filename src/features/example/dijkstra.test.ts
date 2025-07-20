import { describe, expect, it } from "vitest";
import { dijkstra, type Graph } from "./dijkstra";

describe("dijkstra", () => {
	const simpleGraph: Graph = {
		A: { B: 4, C: 2 },
		B: { C: 1, D: 5 },
		C: { D: 8, E: 10 },
		D: { E: 2 },
		E: {},
	};

	it("should calculate shortest distances from start node", () => {
		const result = dijkstra(simpleGraph, "A");

		expect(result.distances).toEqual({
			A: 0,
			B: 4,
			C: 2,
			D: 9,
			E: 11,
		});
	});

	it("should track previous nodes correctly", () => {
		const result = dijkstra(simpleGraph, "A");

		expect(result.previous).toEqual({
			A: null,
			B: "A",
			C: "A",
			D: "B",
			E: "D",
		});
	});

	it("should return correct path between nodes", () => {
		const result = dijkstra(simpleGraph, "A");

		expect(result.path("A", "E")).toEqual(["A", "B", "D", "E"]);
		expect(result.path("A", "C")).toEqual(["A", "C"]);
		expect(result.path("A", "A")).toEqual(["A"]);
	});

	it("should return empty path for unreachable nodes", () => {
		const disconnectedGraph: Graph = {
			A: { B: 1 },
			B: {},
			C: { D: 1 },
			D: {},
		};

		const result = dijkstra(disconnectedGraph, "A");
		expect(result.path("A", "C")).toEqual([]);
		expect(result.path("A", "D")).toEqual([]);
	});

	it("should handle single node graph", () => {
		const singleNodeGraph: Graph = {
			A: {},
		};

		const result = dijkstra(singleNodeGraph, "A");

		expect(result.distances).toEqual({ A: 0 });
		expect(result.previous).toEqual({ A: null });
		expect(result.path("A", "A")).toEqual(["A"]);
	});

	it("should handle graph with self-loops", () => {
		const selfLoopGraph: Graph = {
			A: { A: 5, B: 3 },
			B: { C: 2 },
			C: {},
		};

		const result = dijkstra(selfLoopGraph, "A");

		expect(result.distances.A).toBe(0);
		expect(result.distances.B).toBe(3);
		expect(result.distances.C).toBe(5);
	});

	it("should find alternative paths with same cost", () => {
		const alternativePathGraph: Graph = {
			A: { B: 2, C: 2 },
			B: { D: 2 },
			C: { D: 2 },
			D: {},
		};

		const result = dijkstra(alternativePathGraph, "A");

		expect(result.distances.D).toBe(4);
		const path = result.path("A", "D");
		expect(path.length).toBe(3);
		expect(path[0]).toBe("A");
		expect(path[2]).toBe("D");
	});
});
