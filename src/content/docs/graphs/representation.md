---
title: Graph Representation
description: ways to represent graphical relationship in computer
---

### Adjacency Matrix Representation
---
For graph having n nodes, we create a `n x n` matrix.

```c++

int adj[10][10];
memset(adj, 0, sizeof(adj));

// 0 -> 1
adj[0][1] = 1;

```