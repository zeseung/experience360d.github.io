source "https://rubygems.org"

# Jekyll 버전 지정
gem "jekyll", "~> 4.3.0"

# Jekflix 테마
gem "jekflix"

# GitHub Pages 호환성 (로컬 개발용으로 주석 처리)
# gem "github-pages", group: :jekyll_plugins

# 플러그인들
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate"
  gem "jekyll-paginate-content"
end

# Windows 및 JRuby용 tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]