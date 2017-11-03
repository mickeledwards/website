# coding: utf-8

Gem::Specification.new do |spec|
  spec.name                    = "mickel-edwards-portfolio"
  spec.version                 = "1.2.0"
  spec.author                  = 'Mickel Edwards'

  spec.summary                 = %q{A portfolio for Mickel Edwards.}
  spec.homepage                = "https://github.com/mickeledwards/mickeledwards.github.io"
  spec.license                 = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files                   = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(data|includes|layouts|sass)/|(LICENSE|README|CHANGELOG)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.5", ">= 3.5.1"
  spec.add_runtime_dependency "jekyll-data", "~> 1.0"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end