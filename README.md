# vue2-template

基于vue-cli的vue2模板，适用于对兼容性高要求的项目


# 启动

```shell
pnpm i
pnpm run dev
```

# 配置说明

### 项目打包配置

1. 一个环境新增加一个 `.env` 文件，如打包是不需要部署在二级路径可不增加

2. 项目的一些配置在 `src/config` 文件夹中，同样，每个环境增加一个配置


# 打包

```shell
# 开发环境部署
pnpm run develop
# 测试环境部署
pnpm run release
# 生产环境部署
pnpm run master
# 其他环境部署
pnpm run build --mode other
```