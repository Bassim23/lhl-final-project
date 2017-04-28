# -*- encoding: utf-8 -*-
# stub: animate-rails 1.0.10 ruby lib

Gem::Specification.new do |s|
  s.name = "animate-rails".freeze
  s.version = "1.0.10"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Masahiro Saito".freeze]
  s.date = "2016-03-24"
  s.description = "animate.css for rails".freeze
  s.email = ["camelmasa@gmail.com".freeze]
  s.homepage = "https://github.com/camelmasa/animate-rails".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.5.2".freeze
  s.summary = "animate.css for rails".freeze

  s.installed_by_version = "2.5.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rails>.freeze, [">= 0"])
    else
      s.add_dependency(%q<rails>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<rails>.freeze, [">= 0"])
  end
end
