﻿// <auto-generated />
using System;
using Comment.React.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Comment.React.Migrations
{
    [DbContext(typeof(CommentDbContext))]
    partial class CommentDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Comment.React.Models.CommentModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content");

                    b.Property<string>("DateFormatted");

                    b.Property<string>("Email")
                        .HasMaxLength(500);

                    b.Property<int>("Like");

                    b.Property<int?>("ParentId");

                    b.HasKey("Id");

                    b.HasIndex("Email");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Comment.React.Models.LikeButtonModel", b =>
                {
                    b.Property<int>("CommentId");

                    b.Property<string>("UserId");

                    b.Property<bool>("IsLike");

                    b.HasKey("CommentId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("LikeButtons");
                });

            modelBuilder.Entity("Comment.React.Models.UserModel", b =>
                {
                    b.Property<string>("Email")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(500);

                    b.Property<string>("FirstName");

                    b.Property<string>("FullName");

                    b.Property<string>("Image");

                    b.Property<string>("LastName");

                    b.Property<int>("Type");

                    b.HasKey("Email");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Comment.React.Models.CommentModel", b =>
                {
                    b.HasOne("Comment.React.Models.UserModel", "User")
                        .WithMany("Comments")
                        .HasForeignKey("Email");
                });

            modelBuilder.Entity("Comment.React.Models.LikeButtonModel", b =>
                {
                    b.HasOne("Comment.React.Models.CommentModel", "Comment")
                        .WithMany()
                        .HasForeignKey("CommentId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Comment.React.Models.UserModel", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
