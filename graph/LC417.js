var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) {
    return [];
  }
  const m = heights.length;
  const n = heights[0].length;
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));

  const dfs = (r, c, flow) => {
    flow[r][c] = true;
    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ].forEach(([nr, nc]) => {
      if (
        // make sure it's in the matrix
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        // prevent infinite loop
        !flow[nr][nc] &&
        // make sure it's upstream
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };

  // going upstream along the coastline
  for (let r = 0; r < m; r += 1) {
    dfs(r, 0, flow1);
    dfs(r, n - 1, flow2);
  }
  for (let c = 0; c < n; c += 1) {
    dfs(0, c, flow1);
    dfs(m - 1, c, flow2);
  }
  // collect coordinates which can flow to both the Pacific and Atlantic oceans
  const res = [];
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
  return res;
};

// Time Complexity: O(m * n); (traverse the whole matrix)
// Space Complexity: O(m * n); (create a m * n matrix with two arrays)
