#!/bin/bash
PORT="${PORT:-8080}"
npx serve -s . -l "$PORT" 2>/dev/null && exit 0
python3 -m http.server "$PORT"