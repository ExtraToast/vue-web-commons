import { describe, expect, it } from 'vitest'
import {
  createPrivilegedSpaNginxConfig,
  createSpaNginxConfig,
  createUnprivilegedSpaNginxConfig,
} from '../nginx'

describe('sPA nginx template', () => {
  it('renders privileged Vite SPA caching defaults', () => {
    const config = createPrivilegedSpaNginxConfig()

    expect(config).toContain('listen 80;')
    expect(config).toContain('root /usr/share/nginx/html;')
    expect(config).toContain('location ^~ /assets/ {')
    expect(config).toContain('try_files $uri =404;')
    expect(config).toContain('Cache-Control "public, max-age=31536000, immutable" always')
    expect(config).toContain('location = /index.html {')
    expect(config).toContain('Cache-Control "no-cache, no-store, must-revalidate" always')
    expect(config).toContain('try_files $uri $uri/ /index.html;')
    expect(config).not.toContain('location = /healthz')
  })

  it('renders unprivileged port and health endpoint variant', () => {
    const config = createUnprivilegedSpaNginxConfig({
      healthz: true,
    })

    expect(config).toContain('listen 8080;')
    expect(config).toContain('location = /healthz {')
    expect(config).toContain('return 200 "ok";')
  })

  it('allows static asset and fallback customization', () => {
    const config = createSpaNginxConfig({
      listenPort: 3000,
      serverName: 'spa.internal',
      root: '/app/dist',
      assetPrefix: '/static/assets/',
      indexPath: '/shell.html',
      fallbackPath: '/shell.html',
      staticExtensions: ['png', 'webmanifest'],
      staticMaxAgeSeconds: 60,
      assetMaxAgeSeconds: 120,
      healthz: { path: '/readyz', body: 'ready' },
      gzip: { static: false, types: ['text/plain'] },
    })

    expect(config).toContain('listen 3000;')
    expect(config).toContain('server_name spa.internal;')
    expect(config).toContain('root /app/dist;')
    expect(config).toContain('location ^~ /static/assets/ {')
    expect(config).toContain('Cache-Control "public, max-age=120, immutable" always')
    expect(config).toContain('location ~* \\.(png|webmanifest)$ {')
    expect(config).toContain('Cache-Control "public, max-age=60" always')
    expect(config).toContain('location = /readyz {')
    expect(config).toContain('return 200 "ready";')
    expect(config).toContain('try_files $uri $uri/ /shell.html;')
    expect(config).not.toContain('gzip_static on;')
  })
})
