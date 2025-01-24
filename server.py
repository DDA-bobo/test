import http.server
import socketserver
import json

PORT = 8000

def generate_chinese_names(english_name):
    # 这里可以添加更复杂的生成逻辑
    return [
        '米凯乐 (Mi Kai Le)',
        '迈克尔 (Mai Ke Er)',
        '米高 (Mi Gao)'
    ]

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 添加CORS头，允许API调用
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')
        super().end_headers()

    def do_POST(self):
        if self.path == '/generate':
            # 解析请求体
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)

            # 从请求中获取英文名字
            english_name = data.get('name', '')

            # 生成中文名字的逻辑
            chinese_names = generate_chinese_names(english_name)

            # 返回生成的中文名字
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            response = json.dumps({'names': chinese_names})
            self.wfile.write(response.encode('utf-8'))
        else:
            super().do_POST()

Handler = CORSHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server running at http://localhost:{PORT}/")
    httpd.serve_forever()
